import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { fetchBySearchMovies } from 'components/Api/api';
import {
  Wrapper,
  Form,
  Input,
  Icon,
  Button,
  ErrorText,
} from './SearchBarStyled';

const SearchBox = ({ setMovies }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { search: '' } });
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get('query') ?? '');

  const onSubmit = ({ search }) => {
    setSearch(search);
    setSearchParams({ query: search });
    reset();
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    fetchBySearchMovies(search).then(data => {
      if (data.length === 0) {
        return toast.error('Sorry, movie not found');
      }
      setMovies(data);
    });
  }, [search, setMovies]);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input
          {...register('search', { required: 'This field is required' })}
          placeholder="Search movie by name"
          autoFocus
        />
        <Button type="submit">
          <Icon />
        </Button>
      </Form>
      <ErrorText>{errors.search?.message}</ErrorText>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  setMovies: PropTypes.func.isRequired,
};

export default SearchBox;
