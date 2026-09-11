"""Read-only structural observations. This tool never grants phase approval."""
import argparse
import json
from pathlib import Path, PurePosixPath

PHASES = ('vision', 'domain', 'scaffold', 'mvp-design', 'plan', 'tracer', 'audit')
DOMAIN = {'RULES_SUMMARY.md', 'DOMAIN.md', 'REQUIREMENTS.md', 'SOURCE_AUDIT.md'}
DESIGN = {'MVP_DESIGN.md', 'UX_DESIGN.md', 'ARCHITECTURE.md'}
DOCS = DOMAIN | DESIGN | {'README.md', 'VISION.md', 'IMPLEMENTATION_PLAN.md'}


def check(phase, paths, extra_outputs=()):
    if phase not in PHASES:
        raise ValueError('unknown phase')
    paths, extras = set(paths), set(extra_outputs)
    errors = []
    for p in paths | extras:
        if not p or '\\' in p or PurePosixPath(p).is_absolute() or '..' in PurePosixPath(p).parts:
            errors.append(f'unsafe relative path: {p}')
    if phase == 'audit':
        return errors + (['audit is read-only'] if paths else [])
    ordinary = paths - extras - {'PROMPTS.md'}
    allowed = {'vision': {'README.md', 'VISION.md', 'LICENSE', 'LICENSE.md'},
               'domain': DOMAIN, 'mvp-design': DESIGN, 'plan': {'IMPLEMENTATION_PLAN.md'}}
    if phase in allowed:
        errors += [f'{phase} does not own {p}' for p in sorted(ordinary - allowed[phase])]
    if phase == 'domain' and len(ordinary & DOMAIN) > 1:
        errors.append('choose one primary domain summary or record an explicit exception')
    if phase in ('scaffold', 'tracer'):
        errors += [f'explicit amendment required: {p}' for p in sorted(ordinary & (DOCS - {'README.md'}))]
    return errors


def inspect(root):
    observed = sorted(p for p in DOCS if (Path(root) / p).is_file())
    return {'observed_documents': observed, 'approval': 'unknown',
            'platform_verification': 'unknown', 'semantic_review_required': True,
            'instruction': 'Use the actual user request and review evidence; existence is not approval.'}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    subs = parser.add_subparsers(dest='command', required=True)
    c = subs.add_parser('check')
    c.add_argument('phase', choices=PHASES)
    c.add_argument('paths', nargs='*')
    c.add_argument('--allow', action='append', default=[], help='Previously authorized exception, not a new approval')
    i = subs.add_parser('inspect')
    i.add_argument('root')
    args = parser.parse_args()
    if args.command == 'inspect':
        result = inspect(args.root)
    else:
        result = {'errors': check(args.phase, args.paths, args.allow), 'semantic_review_required': True}
    print(json.dumps(result, indent=2))
    return bool(result.get('errors'))


if __name__ == '__main__':
    raise SystemExit(main())
