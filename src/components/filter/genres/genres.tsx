import { GENRES_LIST } from 'src/data/genres-list';
import './genres.css';

type GenresProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    genres: number[];
};

const Genres = ({ onChange, genres }: GenresProps) => {
    return (
        <div className='genres_list'>
            <ul>
                {GENRES_LIST.map((item) => (
                    <li key={item.id}>
                        <input
                            type='checkbox'
                            checked={genres.includes(item.id)}
                            onChange={(event) => onChange(event, item.id)}
                        />
                        <label htmlFor='/'>{item.label}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Genres;
