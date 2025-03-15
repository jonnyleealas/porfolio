import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface CardData {
  title: string;
  text: string;
  imageUrl: string;
}

interface ProjectsProps {
  cardsData: CardData []
}


const Projects: React.FC<ProjectsProps> = ({cardsData}) => {
  return (
    <div>
    {cardsData.map((card, index) => (

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      ))}
    </div>
  );
}

export default Projects;