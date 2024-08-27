// import useFetchUser
import { User } from "@/types"

export default function UserProfile({ params }: { params: { nickname: string } }) {

    const { user, error } = useFetchUser(params.nickname)
    if (error) {
        return <h1>Error fetching game: {error}</h1>
    }
    if (!user) {
        return <h1>Loading...</h1>
    }

    const { id, name, created_at, img, description, email }: User = user

    return (
        <h1>Bienvenido {name}</h1>
    )
}