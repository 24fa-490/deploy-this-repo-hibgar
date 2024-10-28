
import sql from '$lib/server/database';

export async function load() {
    const rows = sql`
    SELECT
        containerNumber,
        nameOfShip,
        containerSize,
        dateContainerShipped
    FROM
        containersz`;

    console.log({rows});

    return { containers: rows };
}
