
export default defineEventHandler(() => {
    
    const items = [];

    const seedStart = Math.floor(Math.random() * 1000);

    for (let i = seedStart; i < seedStart + 10; i++) {
        items.push({
            id: i,
            title: `title ${i}`,
            description: `description ${i}`,
            image: `https://picsum.photos/seed/${i}/300/200`
        });
    }

    return {
      items
    }
});