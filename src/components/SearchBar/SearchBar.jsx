import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchBySearchMovies } from 'components/Api/api';

const SearchBox = ({ setMovies }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { search: '' } });
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    () => searchParams.get('query') ?? ''
  );

  const onSubmit = ({ search }) => {
    setSearch(search);
    setSearchParams({ query: search });
    reset();
  };

  useEffect(() => {
    if (search) {
      fetchBySearchMovies(search).then(data => {
        setMovies(data);
      });
    }
  }, [search, setMovies]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <button type="submit">
          <p>Search</p>
        </button>
        <input
          {...register('search', { required: 'This field is required' })}
          placeholder="Search movie by name"
          autoFocus
        />
      </form>
      <p>{errors.search?.message}</p>
    </>
  );
};

SearchBox.propTypes = {
  setMovies: PropTypes.func.isRequired,
};

export default SearchBox;
