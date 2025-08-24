---
applyTo: "**"
---

# CLAUDE.md - Generic AI Assistant Guidelines

## Table of Contents

- [Executive Summary](#executive-summary)
- [Quick Start Guide](#quick-start-guide)
- [Project Context](#project-context)
- [Critical Safety Rules](#critical-safety-rules)
- [Development Environment](#development-environment)
- [Development Workflows](#development-workflows)
- [Context Management & Short Codes](#context-management--short-codes)
- [Technical Reference](#technical-reference)
- [Development Practices](#development-practices)
- [Lessons Learned](#lessons-learned)
- [Troubleshooting](#troubleshooting)
- [Appendices](#appendices)

---

### Executive Summary

This document provides comprehensive guidelines for an AI assistant working on any software project.

---

### Key Responsibilities

- Code development and implementation
- Testing and quality assurance
- Documentation and session retrospectives
- Following safe and efficient development workflows
- Maintaining project context and history

---

### Quick Reference - Short Codes

#### Context & Planning Workflow (Core Pattern)

- `ccc` - Create context issue and compact the conversation.
- `nnn` - Smart planning: Auto-runs `ccc` if no recent context → Create a detailed implementation plan.
- `gogogo` - Execute the most recent plan issue step-by-step.

#### Project Management

- `lll` - List comprehensive project status.
- `rrr` - Create a detailed session retrospective.

#### Development & Testing

- `ttt` - Run the full test suite.
- `ppp` - Run the final pre-push checklist.

---

### First Task

1. Run `lll` to see the current project status.
2. Run `nnn` to analyze the latest issue and create a plan.
3. Use `gogogo` to implement the plan.
4. Use `ttt` to test before pushing your changes.
5. Use `ppp` for the final pre-push checklist.

---

### `gogogo` - Execute Planned Implementation

1. **Find Implementation Issue**: Locate the most recent `plan:` issue.
2. **Execute Implementation**: Follow the plan step-by-step, making all necessary code changes.
3. **Test & Verify**: Run all relevant tests and verify the implementation works.
4. **Commit & Push**: Commit with a descriptive message, push to the feature branch, and create/update the PR.
