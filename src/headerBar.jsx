export const HeaderBar = () => {
    return(
        <div className="header-bar large-limit">
            <div className="header-left"></div>
            <div className="header-right">
                <select className="small-button" name="language-selector" id="language-selector">
                    <option value="english">English</option>
                    <option value="español">Español</option>
                </select>
                <button className="action-button small-button">Sign In</button>
            </div>
        </div>
    )
}