export default function setBodyColor() {
    const localStorageTheme = localStorage.getItem("themeMode");
    document.body.className = localStorageTheme;
}