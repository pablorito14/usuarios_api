export interface Pedido {
  id_pedido:         number;
  id_usuario:        number;
  fecha:             Date;
  fecha_respuesta:   Date;
  id_servicio:       number;
  precio:            number;
  imei:              string;
  id_estado:         number;
  codigo:            string;
  nombre_sinusuario: string;
  mail_sinusuario:   string;
  notificado:        number;
  comentario:        string;
  detalle_resp:      string;
  img_modelo:        string;
  modelo:            string;
  pdf:               string;
}