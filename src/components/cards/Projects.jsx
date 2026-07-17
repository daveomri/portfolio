import { Box, Typography, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import srlogo from '../../resource/images/SR.png';
import Tag from '../Tag';
import { sectionSx, innerSx, headingSx, cardSx } from './sectionStyles';

const projects = [
  {
    title: 'Seage framework',
    description:
      'Java-based hyper-heuristics engine for solving NP-hard combinatorial problems efficiently.',
    tags: ['Java', 'Hyper-heuristics'],
  },
  {
    title: 'Sudety Raport',
    description:
      'Admin and lead frontend engineer — migrating the platform to Next.js for better scalability and performance.',
    tags: ['Next.js', 'Frontend lead'],
    logo: srlogo,
    url: 'https://sudetyraport.com',
  },
  {
    title: 'Client integrations',
    description:
      'Built scalable connectors across multiple enterprise automation platforms.',
    tags: ['C#', 'Ruby', 'Python', 'Java'],
  },
];

const Projects = ({ id }) => (
  <Box component="section" id={id} sx={sectionSx}>
    <Box sx={innerSx}>
      <Typography component="h2" sx={headingSx}>
        Notable projects
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 2,
          mt: 4,
        }}
      >
        {projects.map((project) => (
          <Box
            key={project.title}
            sx={{
              ...cardSx,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              {project.logo && (
                <Box
                  component="img"
                  src={project.logo}
                  alt=""
                  sx={{ width: 28, height: 28, borderRadius: '50%' }}
                />
              )}
              <Typography
                sx={{
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                }}
              >
                {project.url ? (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    color="inherit"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    {project.title}
                    <OpenInNewIcon sx={{ fontSize: '0.9rem' }} />
                  </Link>
                ) : (
                  project.title
                )}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: '#444', lineHeight: 1.6, mb: 2, flexGrow: 1 }}
            >
              {project.description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

Projects.displayName = 'Projects';

export default Projects;
