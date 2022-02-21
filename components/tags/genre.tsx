import { GenreAttributes } from "lib/api/api";


export function GenreTag(genre: GenreAttributes) {

    return (
        // TODO implements link when genre pages done
        <a href={''}>
            <span
            className={'inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium dark:bg-primary-700 dark:text-primary-100'}
            >
            {genre.name}
            </span>
        </a>
    )
}