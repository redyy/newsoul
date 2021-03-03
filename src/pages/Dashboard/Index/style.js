import styled from 'styled-components';

import img from '../../../assets/fundo.png';


export const Container = styled.div`
  background: url(${img}) 0% 0% / cover fixed, rgb(11, 10, 13);
  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    width: 100%;

    .section {
    width: 100%;
    height: calc(100vh - 70px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    }
    article, aside, details, figcaption, figure, footer, header, main, nav, section, summary {
        display: block;
    }

    @media (max-width: 1280px) {
      .content {
    padding: 15px;
  }
    }

  @media (max-width: 1580px) {
    .content {
      padding: 20px 30px;
  }
  }

  .content {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;
      max-width: 1300px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding: 20px 0;
      margin-top: 200px;
    }

    .l4_gj {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 20px;
    min-height: 70px;
  }

  .uz_u1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #fff;
    
  }
  .l4_l6 {
    margin: 0;
    font-size: 21px;
    font-weight: 500;
  }

  .pw_py {
    padding-bottom: 30px;
  }

  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }

  .uz_ih {
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
  }
    @media (min-width: 768px) {
      .bf_cy {
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
    }

  @media (min-width: 768px) {
    .bf_c0, .bf_cy {
      -webkit-box-flex: 0;
  }
  }

  .bf_b1, .bf_b3, .bf_b5, .bf_b7, .bf_b9, .bf_bh, .bf_bj, .bf_bl, .bf_bn, .bf_bp, .bf_br, .bf_bt, .bf_bv, .bf_bx, .bf_bz, .bf_c0, .bf_c2, .bf_c4, .bf_c6, .bf_c8, .bf_cb, .bf_ce, .bf_cg, .bf_ci, .bf_ck, .bf_cm, .bf_co, .bf_cq, .bf_cs, .bf_cu, .bf_cw, .bf_cy, .bf_e1, .bf_e3, .bf_e5, .bf_e7, .bf_e9, .bf_ea, .bf_ec, .bf_ef, .bf_eh, .bf_ej, .bf_el, .bf_en, .bf_ep, .bf_er, .bf_et, .bf_ev, .bf_ex, .bf_ez, .bf_fb, .bf_fe, .bf_fg, .bf_fi, .bf_fk, .bf_fm, .bf_fo, .bf_fq, .bf_fs, .bf_fu {
      position: relative;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
      width: 100%;
  }

  .pw_mz {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 5px;
    background: rgba(142, 105, 60);
    box-shadow: 2px 5px 10px 0 rgba(0,0,0,0.10);
    -webkit-box-shadow: none;
    box-shadow: none;
    overflow: hidden;
  }

  .pw_ij {
    padding: 30px 30px 0;
  }

  .pw_l6 {
    font-size: 15px;
    color: #aeb5bc;
  }

  .pw_p0 {
    font-size: 35px;
    color: #fff;
  }

  .client-home-panels {
    margin-bottom: 13px;
  }

  @media (min-width: 768px) {
  .col-sm-6 {
      width: 100%;
  }
  }
@media (min-width: 768px) {
.col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {
    float: left;
}
}
.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

.wdes-clientarea-panel-block {
  background: #1a1918;
    border: 1px solid transparent;
    box-shadow: 2px 5px 10px 0 rgba(0,0,0,0.10);
    margin: 0 0 13px;
    padding: 10px 0;
    border-radius: 2px;
}
.panel {
    font-size: .9em;
}

.client-home-panels .panel>.panel-heading {
    background: 0 0;
    padding-bottom: 20px;
}
.client-home-panels .panel>.panel-heading {
    background-color: transparent;
    border-bottom: 0;
    font-weight: 700;
}
.panel-default>.panel-heading {
    color: rgba(142, 105, 60);;
    background-color: #1e2127;
    border-color: rgba(142, 105, 60);;
}
.panel-heading {
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.wdes-clientarea-panel-block .panel-title {
    font-family: montserrat,sans-serif;
    font-size: 15px;
    color: #fff;
}

.panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
}

.wdes-clientarea-panel-block .pull-right {
    margin-top: -8px;
}
.pull-right {
    float: right!important;
}

.client-home-panels .panel>.panel-heading .panel-title .btn {
    color: #fff;
    border: 0;
}
.wdes-clientarea-panel-block .btn-default {
    transition: all .3s;
    padding: 6px 10px;
}
.bg-color-gold {
    background-color: #f0ad4e;
}
.panel-title .btn {
    overflow: hidden;
    color: white;
    background: rgba(142, 105, 60);
    border-color: rgba(142, 105, 60);
}
.btn-group-xs>.btn, .btn-xs {
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
}
.btn-default {
    color: #fff;
    background-color: #1e2127;
    border-color: #282d36;
}
.btns {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

.client-home-panels .panel>.list-group {
    border: 0;
}
.client-home-panels .panel>.list-group {
    max-height: 250px;
    overflow: auto;
    border-top: 1px solid rgba(142, 105, 60);;;
    border-bottom: 1px solid rgba(142, 105, 60);;;
}
.panel>.list-group, .panel>.panel-collapse>.list-group {
    margin-bottom: 0;
}
.list-group {
    font-size: .9em;
}
.list-group {
    padding-left: 0;
    margin-bottom: 20px;
}

.client-home-panels .panel>.list-group .list-group-item {
    padding: 16px 10px;
    color: rgba(142, 105, 60, 0.5);;;
    font-size: 13px;
    line-height: 19px;
}
.client-home-panels .panel>.list-group .list-group-item:hover {
    background: rgba(74, 76, 79, 0.1);
    cursor: pointer;
}
.client-home-panels .panel>.list-group .list-group-item {
    padding: 15px 10px;
}
.panel-heading+.list-group .list-group-item:first-child {
    border-top-width: 0;
}
.panel>.list-group .list-group-item, .panel>.panel-collapse>.list-group .list-group-item {
    border-width: 1px 0;
    border-radius: 0;
}
.wdes-clientarea-panel-block .panel-body, .wdes-clientarea-panel-block .panel-footer, .wdes-clientarea-panel-block .list-group-item {
    background: 0 0;
}
.list-group-item:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: #fff;
}
a.list-group-item, button.list-group-item {
    color: #555;
}
.list-group-item {
    border-color: #e13939;
    border: 1px solid #e13939;
    color: #fff;
}
.list-group-item {
    padding: 7px 15px;
}
.list-group-item {
    border-color: #e13939;
    color: #fff;
}
.list-group-item {
    position: relative;
    display: block;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #e13939;;
    border: 1px solid #e13939;;
}
.client-home-panels .panel>.list-group .list-group-item-desativado {
    padding: 16px 10px;
    color: #e13939;;;
    font-size: 13px;
    line-height: 19px;
}
.client-home-panels .panel>.list-group .list-group-item-desativado a {
    color: rgba(245, 24, 53, 0.8);
    cursor: pointer;
}

.client-home-panels .panel>.list-group .list-group-item-desativado a:hover {
    color: rgba(245, 24, 53, 0.6);
}
.client-home-panels .panel>.list-group .list-group-item-desativado {
    padding: 15px 10px;
}
.panel-heading+.list-group .list-group-item-desativado:first-child {
    border-top-width: 0;
}
.panel>.list-group .list-group-item-desativado, .panel>.panel-collapse>.list-group .list-group-item-desativado {
    border-width: 1px 0;
    border-radius: 0;
}
.wdes-clientarea-panel-block .panel-body, .wdes-clientarea-panel-block .panel-footer, .wdes-clientarea-panel-block .list-group-item-desativado {
    background: 0 0;
}
.list-group-item-desativado:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: #fff;
}
a.list-group-item-desativado, button.list-group-item-desativado {
    color: #555;
}
.list-group-item-desativado {
    border-color: #e13939;
    border: 1px solid #e13939;
    color: #fff;
}
.list-group-item-desativado {
    padding: 7px 15px;
}
.list-group-item-desativado {
    border-color: #e13939;
    color: #fff;
}
.list-group-item-desativado {
    position: relative;
    display: block;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #e13939;;
    border: 1px solid #e13939;;
}

.client-home-panels .panel>.list-group .list-group-item .label {
    border-radius: 0;
    margin: 10px;
}
.label {
    border-radius: 0;
}
.label {
    display: inline;
    padding: .4em .6em .3em;
    font-size: 86%;
    font-weight: lighter;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}

.client-home-panels .panel small {
    color: #e13939;
    margin-top: 10px;
    display: inline-block;
    font-size: 12px;
}
.client-home-panels .panel small {
    color: #888;
}
.small, small {
    font-size: 85%;
}
small {
    font-size: 80%;
}
`;


