export default defineEventHandler(async (e) => {
    const albumArtId = parseInt(e.context?.params?.albumArtId!) as number
    const url = `https://picsum.photos/seed/${albumArtId}/300/200`;
    return sendRedirect(e, url);
});