# CO2 Emission Monitor

This project is a modern web application developed for the imaginary NGO "Green Future Energy" to raise awareness about greenhouse gas emissions. The application provides a user-friendly interface to compare CO2 emissions of various countries and companies.

## Key Features

- Responsive design for desktop, tablet, and mobile devices
- Interactive data table with CO2 emission information
- Advanced filtering and sorting capabilities
- Multi-language support (i18n implementation)
- Single-page application (SPA) architecture using React Router

## Technical Stack

- React.js for frontend development
- Node.js as the runtime environment
- Bootstrap for responsive design
- TanStack Table v8 for advanced table functionality
- Git and GitHub for version control and hosting

## Security Measures

- Implemented XSS protection for input fields
- Conducted security testing to ensure data integrity

## Project Structure

The application is built with a modular architecture, featuring:

- A central `App` component
- Header components for navigation and language selection
- Content components including the main page and data table
- Footer component with legal information

## Future Enhancements

Potential areas for future development include:

- Expanded data analysis features
- User profile implementation for personalized content
- Performance optimization for large datasets
- Additional security testing and enhancements

This project demonstrates the use of modern web technologies to create an informative and interactive platform for exploring CO2 emission data.

```mermaid


graph RL;
    index.js-->index.html;
    index.css-->index.js;
    style index.css stroke:#0000FF,stroke-width:2px

    App.js-->index.js;
    App.css-->App.js;
    style App.css stroke:#0000FF,stroke-width:2px

    LanguageButton.jsx-->App.js;
    LanguageButton.css-->LanguageButton.jsx;
    style LanguageButton.css stroke:#0000FF,stroke-width:2px
    LanguageButtonData.js-->LanguageButton.jsx;

    MainNavigation.jsx-->App.js;
    MainNavigation.css-->MainNavigation.jsx;
    style MainNavigation.css stroke:#0000FF,stroke-width:2px
    MainNavigationData.js-->MainNavigation.jsx;

        MainPage.jsx-->App.js;
    MainPage.css-->MainPage.jsx;
    style MainPage.css stroke:#0000FF,stroke-width:2px
    VideoMain.jsx-->MainPage.jsx;

    TablePage.jsx-->App.js;
    TablePage.css-->TablePage.jsx;
    style TablePage.css stroke:#0000FF,stroke-width:2px
    DataTable.jsx-->TablePage.jsx;
    GlobalFilter.jsx-->DataTable.jsx;
    CheckboxFilterComponent.jsx-->DataTable.jsx;
    TypeFilter.jsx-->DataTable.jsx;
    NameFilter.jsx-->DataTable.jsx;
    ExtractOption.jsx-->DataTable.jsx;
    Pagination.jsx-->DataTable.jsx;
    DebounceFunction.jsx-->DataTable.jsx;;
    Pagination.jsx-->DataTable.jsx;


    OverusPage.jsx-->App.js;
    OverusPage.css-->OverusPage.jsx;
    style OverusPage.css stroke:#0000FF,stroke-width:2px

    
    
    Footer.jsx-->App.js;
    Footer.css-->Footer.jsx;
    style Footer.css stroke:#0000FF,stroke-width:2px

    i18n.js-->|Übersetzungsbibliothek|App.js;
   
    ar-->i18n.js;
    translation.json-Arabic-->ar;
    de-->i18n.js;
    translation.json-German-->de;
    en-->i18n.js;
    translation.json-English-->en;
    fr-->i18n.js;
    translation.json-French-->fr;

```
