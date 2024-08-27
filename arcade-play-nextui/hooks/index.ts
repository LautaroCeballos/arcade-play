import { useState, useEffect } from "react";
import { fetchGames, fetchGame } from "@/lib/data";
import { getUserData } from "@/app/api/auth";
import { GameItem } from "@/types";

export function useFetchGames() {
    const [games, setGames] = useState<GameItem[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchGamesData = async () => {
            try {
                const res = await fetchGames();
                if (!res) {
                    throw new Error('Error fetching games');
                }
                setGames(res as GameItem[]);
            }
            catch (error) {
                setError(error as string);
            }
        };
        fetchGamesData();
    }, []);
    return { games, error };
}


export function useFetchGame(gameId: string) {
    const [game, setGame] = useState<GameItem | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchGameData = async () => {
            try {
                const res = await fetchGame(gameId);

                if (!res) {
                    throw new Error('Error fetching game');
                }

                setGame(res as GameItem);
            }
            catch (error) {
                setError(error as string);
            }
        };
        fetchGameData();
    }, [gameId]);
    return { game, error };
}




export function useGetUserData() {
    const [user, setUser] = useState<any>(null); //ARREGLAR CON LOS TIPOS CORRECTOS DE USER
    const [error, setError] = useState<any>(null);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await getUserData();
                if (!res) {
                    throw new Error('Error fetching user');
                }
                setUser(res);
            }
            catch (error) {
                setError(error as string);
            }
        };
        fetchUserData();
    }, []);
    return { user, error };
}