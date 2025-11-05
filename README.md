# ASJA University - Official Website Project

This repository contains the source code for the new official website of ASJA (Athénée Saint Joseph Antsirabe) University. This project aims to create a modern, professional, and user-friendly web presence for the university.

## About ASJA University

ASJA University is a private higher education institution located in Antsirabe, Madagascar, founded in 2000. It offers a range of professional studies in fields such as Social Sciences (Development, Marketing) and Science and Technology (Agronomy, Computer Engineering, etc.).

The goal of this project is to develop a comprehensive website that serves prospective students, current students, faculty, and the public by providing easy access to information about the university.

## ✨ Key Features

The new website will include the following key sections and features:

-   **Homepage:** A welcoming landing page with news, upcoming events, and quick links to important sections.
-   **About Us:** Information on the university's history, mission, vision, and administration.
-   **Academics:** Detailed descriptions of faculties, departments, and academic programs offered.
-   **Admissions:** A clear guide to the admission process, requirements, and application forms.
-   **Student Life:** Information about the campus, student clubs, sports, and other extracurricular activities.
-   **News & Events:** A dedicated section for university news, announcements, and event calendars.
-   **Contact Page:** Contact details, a contact form, and an embedded map showing the university's location.
-   **Responsive Design:** Full accessibility on both desktop and mobile devices.

## 🛠️ Tech Stack

This project is built with a modern web development stack:

-   **Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## 📂 Project Structure

The project follows a feature-based and layered architecture, promoting separation of concerns and maintainability.

```
/src
├── App.tsx
├── main.tsx
├── routes/
│   └── index.tsx
├── components/
│   ├── ui/
│   └── hooks/
├── core/
│   ├── constant.ts
│   ├── result.ts
│   └── types.ts
├── features/
│   ├── auth/
│   │   ├── auth.repository.ts
│   │   ├── auth.repository.impl.ts
│   │   ├── auth.service.ts
│   │   └── login.dto.ts
│   ├── admin/
│   ├── user/
│   └── ... (other features)
├── page/
│   ├── landing/
│   │   ├── components/
│   │   ├── bloc/
│   │   └── index.tsx
│   ├── admin/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── bloc/
│   │   └── index.tsx
│   ├── student-space/
│   └── ... (other pages)
├── lib/
│   └── utils.ts
└── i18n.ts
```

### Core Directories

-   **`src/components`**: Contains reusable UI components.
    -   `ui/`: Dumb, presentational components, mostly from `shadcn/ui`.
    -   `hooks/`: Reusable custom hooks.
-   **`src/core`**: Holds the core logic and definitions of the application.
    -   `types.ts`: Global TypeScript types and enums (`Mention`, `Level`, `Role`, etc.).
    -   `constant.ts`: Application-wide constants like API endpoints.
    -   `result.ts`: A generic `Result` type for handling success/failure states in asynchronous operations, inspired by functional programming.
-   **`src/features`**: Organizes code by domain or feature (e.g., `auth`, `user`, `post`). This is the heart of the application's business logic. Each feature folder typically contains:
    -   **DTOs (`.dto.ts`)**: Data Transfer Objects define the shape of data exchanged with the API.
    -   **Entities (`.entity.ts`)**: Represent the core domain models.
    -   **Repository (`.repository.ts` and `.repository.impl.ts`)**: The repository pattern abstracts the data layer. The `.ts` file is the interface, and the `.impl.ts` file provides the concrete implementation, handling data fetching, mapping, and error handling.
    -   **Service (`.service.ts`)**: The service layer communicates with the API (e.g., using `axios`). It's injected into the repository implementation.
-   **`src/page`**: Contains the main pages of the application, which are composed of components and connected to the business logic from the `features` directory. Each page often has its own state management (`bloc` folder with custom hooks) and components.
    -   `landing/`: The public-facing homepage.
    -   `admin/`: The administration dashboard.
    -   `student-space/`: The portal for logged-in students.
    -   `login/`: The authentication page.
-   **`src/routes`**: Defines the application's routing using `react-router-dom`.
-   **`src/lib`**: Utility functions, like the `cn` function for merging Tailwind CSS classes.
-   **`src/i18n.ts`**: Configuration for internationalization (i18n) using `i18next`.

### Architectural Patterns

-   **Layered Architecture**: The code is structured into distinct layers (UI, BLoC, Repository, Service) to separate concerns.
-   **Repository Pattern**: The `features` directories use repositories to abstract data sources. This makes it easy to swap data implementations without affecting the UI. For example, you could switch from a REST API to a local mock data source by just changing the repository implementation.
-   **Dependency Injection**: Services are "injected" into repositories (see `src/injection.ts`), and repositories are used by the UI hooks (`bloc`). This promotes loose coupling.
-   **BLoC (Business Logic Component)**: The `bloc` folders inside page directories contain custom hooks that manage the page's state and business logic. They interact with repositories to fetch and manipulate data, providing a clean API to the UI components. This is a form of Presenter/ViewModel pattern.
-   **Feature-Sliced Design**: Code is organized by features, making the codebase scalable and easy to navigate.