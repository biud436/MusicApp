
function findMusicById(_fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>, id: number) {

    return _fetch(`https://api.deezer.com/track/${id}`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        }
    );
}

export default defineEventHandler(({$fetch, context}) => {
    
    const {id} = context.params as any;

    // find music title and artist by id
    const music = findMusicById($fetch, id);

    return {
      ...music
    }
});