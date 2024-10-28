
import sql from '$lib/server/database';

export async function load() {
    const rows = await sql`
    SELECT
        containerNumber,
        nameOfShip,
        containerSize,
        dateContainerShipped
    FROM
        containers`;

    console.log({rows});

    return { containers: rows };
}
