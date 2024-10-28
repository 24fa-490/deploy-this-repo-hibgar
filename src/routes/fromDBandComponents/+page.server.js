
import { sql } from "@vercel/postgres";

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
