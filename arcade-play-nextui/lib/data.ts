import { GameItem, SliderItem, User } from "@/types/index";
import { supabase } from './supabaseClient';

export const fetchGames = async () => {
    const { data: games, error } = await supabase
        .from('games')
        .select('*')
    if (error) {
        return new Error(error.message)
    }
    return games as GameItem[]
}

export const fetchGame = async (gameId: string) => {
    const { data: games, error } = await supabase
        .from('games')
        .select('*')
        .eq('gameId', gameId)
    if (error) {
        return new Error(error.message)
    }
    const game: GameItem = games ? games[0] : [null]
    return game
}


export const fetchUser = async (userId: string) => {
    const { data: users, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
    if (error) {
        return new Error(error.message)
    }
    const user: User = users ? users[0] : null
    return user
}

export const sliderItems: SliderItem[] = [
    {
        title: 'Title 1',
        img: 'https://placehold.co/1200x300',
        description: 'Description 1',
        url: '#'
    }, {
        title: 'Title 2',
        img: 'https://placehold.co/1200x300',
        description: 'Description 2',
        url: '#'
    }, {
        title: 'Title 3',
        img: 'https://placehold.co/1200x300',
        description: 'Description 3',
        url: '#'
    },

]