import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import Header from './components/header/Header';
import Portfolio from './Portfolio';
import Links from './Links';
import Footer from './components/footer/Footer';
import ScrollToTop from './ScrollToTop';
import { colors } from './theme';

const PagePaper = styled(Paper)({
  minHeight: '100vh',
  backgroundColor: colors.cream,
});

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <PagePaper elevation={0} square>
      <Routes>
        <Route path="/links" element={<Links />} />
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PagePaper>
    <Footer />
  </BrowserRouter>
);

export default App;
