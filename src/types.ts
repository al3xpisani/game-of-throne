export type AuthResponse = {
    isAuthenticated: boolean
    accessToken: string | null
}

export type FirebaseOptions = {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
}

export type HouseSchema = {
    name: string
    region: string
    currentLord: string
    founded: string
}

export type tvSeries = []
