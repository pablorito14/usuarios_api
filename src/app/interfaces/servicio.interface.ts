export interface Servicio {
  id_marca:         number;
  id_pais:          number;
  id_empresa:       number;
  id_tipo_servicio: number;
  id_servicio:      number;
  descripcion:      string;
  str_descripcion:  string;
  str_demora:       string;
  costo:            string;
  ganancia:         number;
  precio:           number;
  precio_regular:   number;
  precio_vip:       number;
  demora_min:       number;
  demora_max:       number;
  id_estado_serv:   number;
  detalles:         string;
  link:             string;
  pago:             number;
}
