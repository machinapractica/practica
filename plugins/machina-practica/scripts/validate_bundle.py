"""Validate and optionally produce a reproducible, self-contained plugin archive."""
import argparse
import json
from pathlib import Path
import re
import zipfile


def validate(root):
    identity = json.loads((root / 'plugin.json').read_text())
    compat = json.loads((root / '.codex-plugin/plugin.json').read_text())
    for key in ('name', 'version', 'license', 'description'):
        assert identity[key] == compat[key], f'metadata disagrees: {key}'
    assert identity['name'] == root.name == 'machina-practica'
    assert identity['license'] == 'GPL-3.0-only'
    assert (root / 'LICENSE').is_file()
    names = {'vision','domain','scaffold','mvp-design','plan','tracer','audit','project'}
    skills = list((root / 'skills').glob('*/SKILL.md'))
    assert {s.parent.name for s in skills} == {'practica-' + n for n in names}
    for skill in skills:
        content = skill.read_text()
        assert content.startswith('---\n')
        header = content.split('---', 2)[1]
        assert f'name: {skill.parent.name}\n' in header
        assert re.search(r'^description: .+', header, re.M)
        for reference in re.findall(r'(?:\.\./|references/|assets/)[\w./-]+\.(?:md|py|json|template)', content):
            target = (skill.parent / reference).resolve()
            assert target.is_relative_to(root.resolve()) and target.is_file(), f'missing resource: {skill}: {reference}'
    json.loads((root / 'evals/cases.json').read_text())
    for path in root.rglob('*'):
        assert not path.is_symlink(), f'links not allowed: {path}'
    return identity


def archive(root, output):
    validate(root)
    output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(output, 'w', compression=zipfile.ZIP_DEFLATED) as bundle:
        for path in sorted(root.rglob('*')):
            if not path.is_file() or '__pycache__' in path.parts:
                continue
            info = zipfile.ZipInfo(str(Path(root.name) / path.relative_to(root)), (1980,1,1,0,0,0))
            info.external_attr = 0o100644 << 16
            info.compress_type = zipfile.ZIP_DEFLATED
            bundle.writestr(info, path.read_bytes())


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--archive', type=Path)
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    identity = validate(root)
    if args.archive:
        archive(root, args.archive)
    print(f"Validated {identity['name']} {identity['version']}: eight skills, bundled resources, GPLv3")
