export default function GameSimulator({ gameId }: { gameId: string }) {
    const gameSettings = {
        hideSimButtons: 0,
        noFooter: 1,
        single: 1,
        fullScreen: 1,
        autoFocus: 1,
        loadingColor: "black",
    }

    const gameURL = `https://arcade.makecode.com/---run?id=${gameId}&hideSimButtons=${gameSettings.hideSimButtons}&noFooter=${gameSettings.noFooter}&single=${gameSettings.single}&fullscreen=${gameSettings.fullScreen}&autofocus=${gameSettings.autoFocus}&loadingColor=${gameSettings.loadingColor}&server=0`


    return (
        <div className="relative h-full flex flex-1 overflow-hidden">
            <iframe
                className="absolute inset-0 w-full h-full p-0 m-0"
                src={gameURL}
                allowFullScreen
                sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
            ></iframe>
        </div>
    );
}