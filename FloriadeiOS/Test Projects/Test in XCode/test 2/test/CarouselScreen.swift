//
//  CarouselScreen.swift
//  test
//
//  Created by Pieter van der Mullen on 17/03/2022.
//

import SwiftUI

struct CarouselScreen: View {
    
    let CarouselItems = [
        CarouselItem(name: "Carbon Footprint", description: Lorum, image: "carousel1"),
        CarouselItem(name: "About Floriade", description: Lorum, image: "carousel2"),
        CarouselItem(name: "We are responsible for taking care of the nature", description: Lorum, image: "carousel3")
    ]
    
    var body: some View {
        return ZStack {
            Carousel(items: 3) { item in
                ZStack {
                    RoundedRectangle(cornerRadius: 25)
                        .fill(Color.init(Color.RGBColorSpace.sRGB, red: 0.88, green: 0.88, blue: 0.88, opacity: 1))
                    VStack {
                        RoundedRectangle(cornerRadius: 25)
                            .fill(Color.init(Color.RGBColorSpace.sRGB, red: 0.96, green: 0.96, blue: 0.96, opacity: 1))
                            .overlay(Image(CarouselItems[item].image).resizable().cornerRadius(25, corners: [.bottomRight, .bottomLeft, .topRight, .topLeft])).frame(width: UIScreen.main.bounds.width - (16*2) - (16*2),height: 200).shadow(color: Color.gray, radius: 2, x: 1, y: 2)
                        Text(CarouselItems[item].name).font(Font.custom("ABeeZee", size: 25)).fontWeight(.medium).padding(.horizontal, 20)
                        Text(CarouselItems[item].description).font(Font.custom("ABeeZee", size: 16)).padding(.horizontal, 20).padding(.top, 5.0)
                        Spacer()
                        ZStack {
                            Button(){
                                
                            } label: {
                                
                            }
                            RoundedRectangle(cornerRadius: 0)
                                .fill(Color.init(Color.RGBColorSpace.sRGB, red: 0.32, green: 0.71, blue: 0.43, opacity: 1)).frame(width: UIScreen.main.bounds.width - (16*2) - (16*2),height: 50).cornerRadius(25, corners: [.bottomRight, .bottomLeft])
                            Text("Explore Now").fontWeight(.semibold).foregroundColor(Color.white).font(Font.custom("ABeeZee", size: 25))
                        }
                        
                    }
                    
                }.carouselItem().shadow(color: Color.gray, radius: 2, x: 1, y: 2)
                
            }
        }
    }
}

struct CarouselScreen_Previews: PreviewProvider {
    static var previews: some View {
        CarouselScreen()
            .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone 11 Pro")
            .environment(\.locale, .init(identifier: "en"))
        
        CarouselScreen()
            .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone 11 Pro")
            .environment(\.locale, .init(identifier: "nl"))
        
        CarouselScreen()
            .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone SE (2nd generation)")
            .environment(\.locale, .init(identifier: "en"))
        
        CarouselScreen()
            .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone SE (2nd generation)")
            .environment(\.locale, .init(identifier: "nl"))
    }
}

struct CarouselItem: Identifiable {
    let id = UUID()
    let name: LocalizedStringKey
    let description: String
    let image: String
}

let Lorum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
