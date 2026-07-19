import { Box, Typography } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CodeIcon from '@mui/icons-material/Code';
import RouterIcon from '@mui/icons-material/Router';

import Tag from '../Tag';
import { colors } from '../../theme';
import { sectionSx, innerSx, headingSx, cardSx } from './sectionStyles';

const categories = [
  {
    name: 'Frontend',
    icon: <WebIcon />,
    items: ['React (TypeScript)', 'Next.js', 'Vue', 'Django', 'Flask'],
  },
  {
    name: 'Backend & CMS',
    icon: <StorageIcon />,
    items: ['Strapi', 'Payload', 'GraphQL', 'MySQL', 'NoSQL'],
  },
  {
    name: 'AI & Automation',
    icon: <SmartToyIcon />,
    items: [
      'Data analysis',
      'Predictive modeling',
      'Combinatorial optimisation',
      'Workflow automation',
      'LangChain',
      'Strands',
      'Bubble',
      'Workato',
      'Power Automate',
      'Camunda',
      'PipeDream'
    ],
  },
  {
    name: 'Languages',
    icon: <CodeIcon />,
    items: ['TypeScript', 'Java', 'Python', 'Ruby', 'C', 'C++', 'C#', 'Bash'],
  },
  {
    name: 'Networking',
    icon: <RouterIcon />,
    items: [
      'Cisco routers',
      'Routing protocols',
      'Network design',
      'Packet Tracer',
      'Ethernet wiring',
    ],
  },
];

const Skills = ({ id }) => (
  <Box component="section" id={id} sx={sectionSx}>
    <Box sx={innerSx}>
      <Typography component="h2" sx={headingSx}>
        What I work on
      </Typography>
      <Typography sx={{ textAlign: 'center', color: '#555', mb: 4 }}>
        I build web applications, automation pipelines, and AI-driven systems.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 2,
        }}
      >
        {categories.map((cat) => (
          <Box key={cat.name} sx={cardSx}>
            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}
            >
              <Box sx={{ color: colors.ink, display: 'flex' }}>{cat.icon}</Box>
              <Typography sx={{ fontWeight: 500 }}>{cat.name}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {cat.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

Skills.displayName = 'Skills';

export default Skills;
