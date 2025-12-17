import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../auth-system/AuthContext';
import PrivateRoute from '../auth-system/PrivateRoute';
import Dashboard from '../auth-system/Dashboard';
import Login from '../auth-system/Login';

// Helper to render with providers
const renderWithProviders = (ui) => {
  return render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute>{ui}</PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </MemoryRouter>
  );
};

describe('Advanced Testing: Authentication Guard', () => {
  test('redirects unauthenticated user to login page', () => {
    renderWithProviders(<Dashboard />);
    
    // Since we aren't logged in, we should see the Login page heading
    const loginHeading = screen.getByRole('heading', { name: /login/i });
    expect(loginHeading).toBeInTheDocument();
  });
});