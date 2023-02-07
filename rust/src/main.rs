use std::collections::HashMap;
use serde::{ Serialize, Deserialize };
use actix_web::{error, middleware, web, App, Error, HttpRequest, HttpResponse, HttpServer};
use tokio::stream::Stream;
use log::{ info };


#[derive(Serialize, Deserialize, Debug, Hash, PartialEq, Eq )]
struct Asset {
    name: String,
    symbol: String,
}

#[derive(Serialize, Deserialize, Debug)]
struct Order{
    asset: Asset,
    price: f64,
    volume: i64,
    side: OrderSide,
}

#[derive(Serialize, Deserialize, Debug, Eq, PartialEq, Hash)]
enum OrderSide {
    Buy, 
    Sell,
}

#[derive(Serialize, Deserialize, Debug)]
struct Market {
    base: Asset,
    quote: Asset,
}

impl Market {
    fn new(base:Asset, quote: Asset) -> Market {
        Market { 
            base: base,
            quote: quote
        }
    }

    // fn add_order(&mut self, order: Order){
    //     self.orders.push(order)
    // }

    // fn match_order(&self) -> Vec<(&Order, &Order)> {

    //     let mut matches = vec![];

    //     for i in 0..self.orders.len() {
    //         for j in i+ 1..self.orders.len() {
    //             let order1 = &self.orders[i];
    //             let order2 = &self.orders[j];
    //             if order1.asset == order2.asset && order1.side != order2.side  && order1.price == order2.price {
    //                 matches.push((order1.clone(), order2.clone()))
    //             }
    //         }
    //     }
    //     matches
    // }

}

// #[get("/greet/{name}")]
// async fn greet(name: web::Path<String>) -> impl Responder {
//     format!("hello {name}!")
// }

// #[get("/asset/all")]
// async fn asset() -> impl Responder {
//     format!("hello {name}!")
// }

async fn asset(asset: web::Json<Asset>) -> HttpResponse {
    println!("asset: {:?}", &asset);
    HttpResponse::Ok().json(asset.0) // <- send response
}

async fn market(market: web::Json<Market>) -> HttpResponse {
    println!("market: {:?}", &market);
    HttpResponse::Ok().json(market.0) // <- send response
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    log::info!("starting HTTP server at http://localhost:8080");

    HttpServer::new(|| {
        App::new() //.service(greet)
            .wrap(middleware::Logger::default())
            .app_data(web::JsonConfig::default().limit(4096))
            .service(web::resource("/asset/new").route(web::post().to(asset)))
            .service(web::resource("/market/new").route(web::post().to(market)))
    })
    .bind(("localhost", 8080))?
    .run()
    .await
}
