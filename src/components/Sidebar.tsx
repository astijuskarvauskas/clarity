export default function Sidebar() {
    // state
    
    // jsx
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>Clarity</h1>
            </div>
            <div className="sidebar-options">
                <div className="options-top">
                    <ul>
                        <li>
                            <img src="../src/res/home-icon.svg" alt="Home"/> 
                            <p>Overview</p>
                        </li>
                        <li>
                            <img src="../src/res/journal-icon.svg" alt="Journal" />
                            <p>Journal</p>
                        </li>
                        <li>
                            <img src="../src/res/emotions-icon.svg" alt="Emotions" />
                            <p>Emotions</p>
                        </li>
                        <li>
                            <img src="../src/res/insights-icon.svg" alt="Insights" />
                            <p>Insights</p>
                        </li>
                        <li>
                            <img src="../src/res/targets-icon.svg" alt="Goals" />
                            <p>Goals</p>
                        </li>
                        <li>
                            <img src="../src/res/calendar-icon.svg" alt="Calendar" />
                            <p>Calendar</p>
                        </li>
                    </ul>
                </div>
                <div className="options-bottom">
                    <ul>
                        <li>
                            <img src="../src/res/log-emotion-icon.svg" alt="Log emotion" />
                            <p>Log emotion</p>
                        </li>
                        <li>
                            <img src="../src/res/write-journal-icon.svg" alt="Write Journal" />
                            <p>Write Journal</p>
                        </li>
                        <li>
                            <img src="../src/res/add-goal-icon.svg" alt="New goal" />
                            <p>New goal</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}