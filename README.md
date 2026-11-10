# Darling Wisdom Academy React site

This project is the Phase 1 React foundation for Darling Wisdom Academy High School in Juba, South Sudan. It keeps the older static demonstration intact and establishes a modular route layout, shared site shell, design tokens and provisional content model.

## Windows setup

From a Windows PowerShell terminal:

```powershell
cd "C:\Darling Wisdom A\darling-wisdom-react"
npm.cmd install
```

## Run the app locally

```powershell
cd "C:\Darling Wisdom A\darling-wisdom-react"
npm.cmd run dev -- --host 127.0.0.1
```

Then open the local URL shown in the terminal, usually:

```text
http://127.0.0.1:5173/
```

## Production build

```powershell
cd "C:\Darling Wisdom A\darling-wisdom-react"
npm.cmd run build
```

## Preview the production build

```powershell
cd "C:\Darling Wisdom A\darling-wisdom-react"
npm.cmd run preview -- --host 127.0.0.1 --port 4173
```

## Important notes

- This is Phase 1 only; no final homepage design or later-phase sections are implemented yet.
- School statistics, fees, staff names, testimonials, admissions dates, and history remain placeholders.
- The real logo and selected school photos were copied into the React project. The original files remain in their original source folders.
- The required video ID is preserved in the content configuration as `PiO45GZBOPg` for future embedding.
