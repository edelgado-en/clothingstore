const testName: string = 'test';

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (parameter: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {
   
        <input 
            type="text"
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
   
}

export default SearchBox;