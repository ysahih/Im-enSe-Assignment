# PPE Monitoring Dashboard

## Overview

The PPE Monitoring Dashboard is a web application built using React, TypeScript, and Next.js. It is designed to monitor personal protective equipment (PPE) violations among workers, providing an intuitive interface for tracking and managing PPE usage, violations, and compliance across different sites and workers.

## Features

- **Sidebar Toggle:** Allows users to collapse or expand the sidebar for better screen real estate management.
- **Navbar Dropdowns:** Includes options for profile settings, language selection, and logout functionality.
- **Date Range Picker:** Enables users to select custom date ranges to filter the violations data.
- **PPE Violations Table:** Displays detailed information about PPE violations, including workers, types of PPE, and the number of violations.
- **Show/Hide Columns:** Users can customize the table view by selecting which columns (PPE types) to display.
- **Violations Info Popup:** Provides additional details about specific violations when clicked.

## Implementation Details

### Technologies Used

- **React:** For building the user interface.
- **TypeScript:** For type checking and improved developer experience.
- **Next.js:** For server-side rendering and routing.


### Sidebar Toggle

Implemented using state management to control the visibility of the sidebar.

### Navbar Dropdowns

Includes profile and language selection dropdowns, implemented using React state and event handlers.

### Date Range Picker

Implemented using a third-party date picker component, integrated to filter the data displayed in the violations table.

### PPE Violations Table

Displays data in a tabular format, with each column representing a type of PPE and each row representing a worker. The data is fetched from an API and managed using React state.

### Show/Hide Columns

Allows users to customize which columns are displayed in the table. This is managed using React state and conditional rendering.

### Violations Info Popup

Displays detailed information about specific PPE violations. Triggered by clicking on a cell in the violations table, and implemented using a modal component.

## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ysahih/Im-enSe-Assignment.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Im-enSe-Assignment.git
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open the application in your browser:

    ```bash
    open http://localhost:3000
    ```

## Customization

- **Styling:** modify tailwind to change the appearance of the dashboard.
- **Components:** Update the components in the `/components` directory to add new functionality or alter existing features.
- **Data Fetching:** Modify API calls in `ViolationsTable.tsx` to fetch data from a different source if needed.


## Contact

For any questions or issues, please create an issue on the GitHub repository.


