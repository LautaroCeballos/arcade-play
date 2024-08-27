export default function CodeSimulator({ gameId }: { gameId: string }) {
    return (
        <div className="relative h-0 pb-[70%] overflow-hidden">
            <iframe
                className="absolute inset-0 w-full h-full p-0 m-0"
                src={`https://arcade.makecode.com/#pub:${gameId}`}
                sandbox="allow-popups allow-forms allow-scripts allow-same-origin">
            </iframe>
        </div>
    )
}
