import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <MaterialIcons name="attach-money" size={28} color="#666" />
            <MaterialIcons name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 980.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 783,00 recebida de Paula Lima hoje às 06:32h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
