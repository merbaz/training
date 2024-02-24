import amqp from "amqplib";


amqp.connect('amqp://localhost')
  .then((connection) => connection.createChannel())
  .then((channel) => {
    console.log(channel)
    channel.assertExchange('direct_exchange', 'direct', { durable: false });
    channel.assertQueue('blogs', { durable: false });
    channel.bindQueue('blogs', 'direct_exchange', 'chat');
    
    // Channel is ready for use
  })
  .catch((error) => {
    console.error('Error connecting to RabbitMQ', error);
});