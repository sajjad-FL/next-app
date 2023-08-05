# generateStaticParams 

load all the data based on the params that is defined 
e.g


interface PageParamsProps {
    params: { topic: string }
}

export function generateStaticParams(){
    return ['health', 'body'].map(topic => ({topic}))
}

export async function Page ( { params: { topic } }: PageParamsProps )