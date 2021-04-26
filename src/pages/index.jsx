import Card from "../components/Card";
import CarImage from "../components/CarImage";
// import Carro from "../../public/assets/carro.jpg";
import { Title, Text, ContainerCards } from "../components/style";

const Home = () => (
  <>
    <CarImage
      title="Compre os melhores carros aqui"
      description="Novos e seminovos"
      image="assets/carro_branco.jpg"
    />
    <Title fontSize="2rem" marginBottom="0">
      Inovação para o seu dia a dia
    </Title>
    <Text fontSize="1rem" marginBottom="0">
      Eleve seu prazer de dirigir para outro nível. A Concessionária Hope possui
      uma variedade de carros que agrada a todos os gostos. Encontre veículos
      com excelente economia de combustível, tecnologia inovadora, design
      sofisticado e segurança impressionante.
    </Text>
    <ContainerCards>
      <Card
        src="assets/icone1.jpeg"
        alt="Foto de um homem abraçando um carro branco"
        title="Por que a Concessionária Hope?"
        description="Ir além do conforto, segurança e tecnologia para oferecer possibilidades inéditas. Esse é o nosso propósito, e mesmo depois de 100 anos de história, continuamos criando soluções para te ajudar a encontrar novos caminhos."
      />
      <Card
        src="assets/icone2.jpeg"
        alt="Foto de um homem entregando uma chave para outro homem"
        title="Como são nossos carros?"
        description="Segurança, design e tecnologia em um SUV como você nunca viu, com motor 2.0 turbo de 262CV, rodas de 19″ e teto solar panorâmico, o Chevrolet Equinox impressiona por todos os ângulos."
      />
      <Card
        src="assets/icone3.jpg"
        alt="Foto de carro nas montanhas"
        title="Coleções de carros esportivos"
        description="Com um simples toque, você se conecta a funcionalidades que facilitam sua vida 24 horas por dia: diagnóstico, emergência, concierge, segurança, navegação e muito mais."
      />
      <Card
        src="assets/icone2.jpeg"
        alt="Foto de um homem entregando uma chave para outro homem"
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem ex, vehicula sit amet consectetur hendrerit, ornare sed diam. Nunc et lectus vel urna ornare ornare a a nisi. Quisque pulvinar rhoncus dignissim. Nullam rhoncus egestas porttitor. Vivamus posuere libero tellus, vel ornare ipsum posuere nec."
      />
    </ContainerCards>
  </>
);

export default Home;
