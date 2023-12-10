
```mermaid


graph BT;
    index.js-->index.html;
    index.css-->index.js;
    style index.css stroke:#0000FF,stroke-width:2px

    App.js-->index.js;
    App.css-->App.js;
    style App.css stroke:#0000FF,stroke-width:2px

    Header-Components-->App.js;
    style Header-Components stroke:#ffeb3b,stroke-width:2px

    LanguageButton.jsx-->Header-Components;
    LanguageButton.css-->LanguageButton.jsx;
    style LanguageButton.css stroke:#0000FF
    LanguageButtonData.js-->LanguageButton.jsx;

    MainNavigation.jsx-->Header-Components;
    MainNavigation.css-->MainNavigation.jsx;
    style MainNavigation.css stroke:#0000FF
    MainNavigationData.js-->MainNavigation.jsx;

    Content-Components-->App.js;
    style Content-Components stroke:#ffeb3b,stroke-width:2px

    MainPage.jsx-->Content-Components;
    MainPage.css-->MainPage.jsx;
    style MainPage.css stroke:#0000FF
    VideoMain.jsx-->MainPage.jsx;

    TablePage.jsx-->Content-Components;
    DataTable.jsx-->TablePage.jsx;
    GlobalFilter.jsx-->DataTable.jsx;
    CheckboxFilterComponent.jsx-->DataTable.jsx;
    TypeFilter-->DataTable.jsx;
    NameFilter-->DataTable.jsx;
    ExtractOption.jsx-->DataTable.jsx;
    Pagination.jsx-->DataTable.jsx;
    DebounceFunction.jsx-->DataTable.jsx;;
    DataTable.css-->DataTable.jsx;;
    style DataTable.css stroke:#0000FF,stroke-width:2px
    DebounceFunction-->DataTable.jsx;
    Pagination-->DataTable.jsx;


    OverusPage.jsx-->Content-Components;
    OverusPage.css-->OverusPage.jsx;
    style OverusPage.css stroke:#0000FF

    Footer-Components-->App.js;
    style Footer-Components stroke:#ffeb3b,stroke-width:2px
    Footer.jsx-->Footer-Components;
    Footer.css-->Footer.jsx;
    style Footer.css stroke:#0000FF,stroke-width:2px

    i18n.js-->|Übersetzungsbibliothek|App.js;
    TranslationData-->i18n.js;
    style TranslationData stroke:#ffeb3b,stroke-width:2px
    ar-->TranslationData;
    translation.json-Arabic-->ar;
    de-->TranslationData;
    translation.json-German-->de;
    en-->TranslationData;
    translation.json-English-->en;
    fr-->TranslationData;
    translation.json-French-->fr;
    
```
