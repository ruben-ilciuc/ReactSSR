# Contributing to ReactSSR

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Getting Started

1. **Fork the repository** and clone your fork
2. **Create a branch** for your changes: `git checkout -b feature/your-feature-name` or `fix/your-bug-fix`
3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
5. **Commit your changes** using [Conventional Commits](https://www.conventionalcommits.org/)
6. **Push to your fork** and open a Pull Request

## Development Setup

```bash
# Install dependencies
npm ci

# Run development server
npm run start:dev

# Run linting
npm run lint

# Run tests
npm run test

# Run e2e tests
npm run test:e2e

# Build the project
npm run build
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use interfaces for object shapes, types for unions
- Avoid `any` - use `unknown` or proper types
- Add JSDoc comments for complex functions

### Styling

- Use Tailwind CSS utility classes
- Follow the Tailwind CSS usage guidelines
- Maintain consistency with existing styles

### Git Commits

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

**Examples**:

- `feat(auth): add JWT token validation`
- `fix(dashboard): resolve layout issue on mobile`
- `docs(readme): update installation instructions`

## Pull Request Process

1. **Update documentation** if you're changing functionality
2. **Add tests** for new features or bug fixes
3. **Ensure all tests pass** locally
4. **Update CHANGELOG.md** if applicable (following semantic versioning)
5. **Request review** from maintainers
6. **Address feedback** promptly and professionally

### PR Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated and passing
- [ ] Dependencies updated (if applicable)

## Testing

- Write unit tests for new features
- Write integration tests for complex flows
- Ensure test coverage doesn't decrease
- Test edge cases and error scenarios

## Reporting Issues

### Bug Reports

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md) and include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Screenshots (if applicable)

### Feature Requests

Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md) and include:

- Clear description of the feature
- Problem it solves
- Proposed solution
- Use cases

## Security Issues

**Please do not open public issues for security vulnerabilities.**

Instead, please report security issues via the process outlined in [SECURITY.md](.github/SECURITY.md).

## Code Review

- All PRs require at least one approval from a maintainer
- Be respectful and constructive in reviews
- Address feedback promptly
- Ask questions if something is unclear

## Questions?

If you have questions about contributing, feel free to:

- Open a discussion in the repository
- Contact the maintainers

Thank you for contributing! 🎉
