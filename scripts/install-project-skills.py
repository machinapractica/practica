#!/usr/bin/env python3
"""Install a self-contained skill bundle in one project; never alter global config."""
import argparse
from pathlib import Path
import shutil
import tempfile

SOURCE = Path(__file__).resolve().parents[1] / 'plugins' / 'machina-practica'


def install(project, source=SOURCE):
    project = Path(project).resolve()
    source = Path(source).resolve()
    names = sorted(path.parent.name for path in (source / 'skills').glob('*/SKILL.md'))
    if len(names) != 8:
        raise ValueError('Expected the complete eight-skill Machina Practica bundle')
    agents = project / '.agents'
    skills = agents / 'skills'
    bundle = agents / 'machina-practica'
    scripts = agents / 'scripts'
    helper = scripts / 'phase_contract.py'
    # Refuse aliases and collisions before writing any part of the installation.
    if agents.is_symlink() or skills.is_symlink() or scripts.is_symlink():
        raise ValueError('Existing .agents resource paths must be ordinary directories')
    for directory in (project, agents, skills, scripts):
        if directory.exists() and not directory.is_dir():
            raise ValueError(f'Not a directory: {directory}')
    targets = [bundle, helper, *(skills / name for name in names)]
    if any(path.exists() or path.is_symlink() for path in targets):
        raise ValueError('Machina Practica already exists or a skill name conflicts; no files changed')
    project.mkdir(parents=True, exist_ok=True)
    agents.mkdir(exist_ok=True)
    skills.mkdir(exist_ok=True)
    scripts.mkdir(exist_ok=True)
    copies = []
    installed = False
    try:
        with tempfile.TemporaryDirectory(prefix='.machina-install-', dir=agents) as staging:
            staged = Path(staging) / 'machina-practica'
            shutil.copytree(source, staged, ignore=shutil.ignore_patterns('__pycache__', '*.pyc', '.DS_Store'))
            staged.rename(bundle)
            installed = True
        for name in names:
            target = skills / name
            copies.append(target)
            shutil.copytree(bundle / 'skills' / name, target)
        copies.append(helper)
        shutil.copyfile(bundle / 'scripts/phase_contract.py', helper)
    except BaseException:
        for target in reversed(copies):
            if target.is_dir():
                shutil.rmtree(target)
            elif target.exists():
                target.unlink()
        if installed:
            shutil.rmtree(bundle)
        raise
    return bundle


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('project', type=Path, help='Project directory (created if missing)')
    args = parser.parse_args()
    try:
        destination = install(args.project)
    except (OSError, ValueError) as error:
        parser.exit(1, f'{error}\n')
    print(f'Installed eight skills in {destination.parent / "skills"}')
    print('Open this project in Codex; if skills are not visible, restart the session.')
