function HostPanel(props) {
    return (
        <aside className="host_panel">
            <button>Stop game</button>
            <button>Kick player</button>
            <button>Start voting</button>
            <button onClick={props.finishVotingCallback}>Stop voting</button>
        </aside>
    );
}

export default HostPanel;
