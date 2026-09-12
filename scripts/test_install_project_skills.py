import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('installer', Path(__file__).with_name('install-project-skills.py'))
installer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(installer)


class ProjectInstallation(unittest.TestCase):
    def test_relocated_install_keeps_sibling_references_and_license(self):
        with tempfile.TemporaryDirectory() as directory:
            project = Path(directory) / 'project'
            installer.install(project)
            moved = Path(directory) / 'moved'
            project.rename(moved)
            entries = list((moved / '.agents/skills').iterdir())
            self.assertEqual(len(entries), 8)
            for entry in entries:
                self.assertFalse(entry.is_symlink())
                self.assertTrue((entry / 'SKILL.md').is_file())
                self.assertTrue((entry.resolve() / '../../scripts/phase_contract.py').is_file())
            self.assertTrue((moved / '.agents/machina-practica/LICENSE').is_file())

    def test_collision_preserves_existing_work_without_partial_bundle(self):
        with tempfile.TemporaryDirectory() as directory:
            project = Path(directory)
            existing = project / '.agents/skills/practica-vision'
            existing.mkdir(parents=True)
            (existing / 'SKILL.md').write_text('custom skill')
            with self.assertRaises(ValueError):
                installer.install(project)
            self.assertEqual((existing / 'SKILL.md').read_text(), 'custom skill')
            self.assertFalse((project / '.agents/machina-practica').exists())

    def test_rejects_symlinked_skill_directory(self):
        with tempfile.TemporaryDirectory() as directory:
            project = Path(directory) / 'project'
            (project / '.agents').mkdir(parents=True)
            other = Path(directory) / 'other'
            other.mkdir()
            (project / '.agents/skills').symlink_to(other, target_is_directory=True)
            with self.assertRaises(ValueError):
                installer.install(project)
            self.assertEqual(list(other.iterdir()), [])


if __name__ == '__main__':
    unittest.main()
