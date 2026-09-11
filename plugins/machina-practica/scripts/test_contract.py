import tempfile
import unittest
from pathlib import Path
from phase_contract import check, inspect


class Boundaries(unittest.TestCase):
    def test_scope_and_explicit_combination(self):
        self.assertTrue(check('vision', ['VISION.md', 'src/main.ts']))
        self.assertFalse(check('vision', ['VISION.md', 'src/main.ts'], ['src/main.ts']))
        self.assertFalse(check('plan', ['IMPLEMENTATION_PLAN.md', 'PROMPTS.md']))
        self.assertTrue(check('plan', ['ARCHITECTURE.md']))

    def test_read_only_cannot_be_overridden(self):
        self.assertTrue(check('audit', ['PROMPTS.md'], ['PROMPTS.md']))
        self.assertFalse(check('audit', []))

    def test_traversal_cannot_be_overridden(self):
        for path in ['../secret', '/tmp/file', 'a/../../file', 'a\\file', '']:
            self.assertTrue(check('tracer', [path], [path]))

    def test_primary_and_amendments(self):
        self.assertTrue(check('domain', ['DOMAIN.md', 'RULES_SUMMARY.md']))
        self.assertFalse(check('domain', ['DOMAIN.md', 'RULES_SUMMARY.md'], ['RULES_SUMMARY.md']))
        self.assertTrue(check('scaffold', ['VISION.md']))
        self.assertFalse(check('tracer', ['VISION.md'], ['VISION.md']))

    def test_files_never_imply_approval(self):
        with tempfile.TemporaryDirectory() as root:
            Path(root, 'VISION.md').write_text('Approved')
            result = inspect(root)
            self.assertEqual(result['approval'], 'unknown')
            self.assertTrue(result['semantic_review_required'])

class Bundle(unittest.TestCase):
    def test_archive_is_reproducible_and_self_contained(self):
        from validate_bundle import archive
        import zipfile
        root = Path(__file__).resolve().parents[1]
        with tempfile.TemporaryDirectory() as directory:
            first, second = Path(directory, 'first.zip'), Path(directory, 'second.zip')
            archive(root, first)
            archive(root, second)
            self.assertEqual(first.read_bytes(), second.read_bytes())
            with zipfile.ZipFile(first) as bundle:
                self.assertIn('machina-practica/LICENSE', bundle.namelist())
                self.assertEqual(len([n for n in bundle.namelist() if n.endswith('/SKILL.md')]), 8)
                self.assertFalse(any('__pycache__' in n for n in bundle.namelist()))


if __name__ == '__main__':
    unittest.main()
