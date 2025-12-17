import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import UserDetail from './pages/UserDetail';

test('renders correct user data based on URL ID', () => {
  // Mocking the URL /profiles/1
  render(
    <MemoryRouter initialEntries={['/profiles/1']}>
      <Routes>
        <Route path="/profiles/:id" element={<UserDetail />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Harper Lee/i)).toBeInTheDocument();
  expect(screen.getByText(/How to kill a Mockingbird/i)).toBeInTheDocument();
});