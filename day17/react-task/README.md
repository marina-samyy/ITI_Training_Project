# React Task

A small React project built with **Vite**. It practices the main ideas from today's lesson: components, JSX, Fragment, props, state and hooks.

## Preview

The page has a purple theme and contains these sections:

1. Navbar
2. Counter (Parent) with CounterButton (Child)
3. Team (Parent) with MemberCard (Child)
4. About and Contact side by side

## Components

| Component | Type | Description |
| --- | --- | --- |
| `Navbar` | Single | Top bar with links |
| `Counter` | Parent | Holds the `count` state |
| `CounterButton` | Child | Receives `text`, `icon` and `onClick` as props |
| `Team` | Parent | Holds the selected member state |
| `MemberCard` | Child | Receives member data and `onSelect` as props |
| `About` | Single | Describes the project |
| `Contact` | Single | Contact information |

## Concepts Used

- JSX
- Fragment
- `useState` hook
- Props
- Lists with `map` and `key`
- CSS Modules
- Bootstrap
- FontAwesome

## Tech Stack

- React
- Vite
- Bootstrap
- FontAwesome Free

## Project Structure

```
src
├── components
│   ├── About
│   ├── Contact
│   ├── Counter
│   ├── CounterButton
│   ├── MemberCard
│   ├── Navbar
│   └── Team
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Useful Links

- [React Hooks](https://react.dev/reference/react/hooks)
- [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html)
- [Fragments](https://legacy.reactjs.org/docs/fragments.html)
- [Bootstrap](https://www.npmjs.com/package/bootstrap)
- [FontAwesome](https://fontawesome.com/)
