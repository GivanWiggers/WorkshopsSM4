//
//  FootprintInfo.swift
//  test
//
//  Created by Noah Koole on 21/03/2022.
//

import SwiftUI

struct FootprintInfo: View {
    @State var CardExpanded: Bool = true
    
    var body: some View {
        let componentHeight: CGFloat = UIScreen.main.bounds.height * 0.25
        let imageHeight: CGFloat = 55
        
        ZStack {
            Image("ARImageBackground").resizable().edgesIgnoringSafeArea(.all)
            
            VStack {
                Spacer()
                VStack(spacing: 0) {
                    HStack(alignment: .top) {
                        Image("netherlandsFlag").resizable()
                            .frame(width: imageHeight, height: imageHeight)
                            .cornerRadius(10)
                        Spacer()
                        VStack(alignment: .leading) {
                            Text("Dutch carbon footprint")
                                .font(.system(size: 16))
                                .fontWeight(Font.Weight.bold)
                            
                            Text("The average carbon footprint of the Dutch").font(.system(size: 12))
                        }
                        Spacer()
                        Image("MapIcon")
                            .resizable()
                            .frame(width: imageHeight, height: imageHeight)
                    }
                    .padding(.horizontal, 20.0)
                    .frame(height: componentHeight * 0.6)
                    .background(.white)
                    .cornerRadius(25)
                    
                    HStack(alignment: CardExpanded ? .top : .center) {
                        
                        if (!CardExpanded) {
                            CardDetailsCollapsed(CardExpanded: $CardExpanded, componentHeight: componentHeight)
                        } else {
                            CardDetailsExpanded(CardExpanded: $CardExpanded, componentHeight: componentHeight)
                        }

                        Button(action: {
                            CardExpanded = !CardExpanded
                        }) {
                            Image("arrowUp").rotationEffect(.degrees(CardExpanded ? 180 : 0)).animation(.easeInOut)
                        }
                        Spacer()
                        Spacer()
                        Spacer()
                        
                    }.padding(.top, CardExpanded ? 30 : 0)
                    
                }.background(Color(UIColor(red: 0.96, green: 0.96, blue: 0.96, alpha: 1.00)))
                    .frame(width: UIScreen.main.bounds.width - (6) - (16), height: !CardExpanded ? componentHeight : componentHeight * 2.5)
                    .cornerRadius(25)
                    .padding(.bottom, 20)
                    .animation(.easeInOut)
                
            }
        }
    }
}

struct FootprintDetails: View {
    var title: String
    var detail: String
    
    var body: some View {
        VStack(alignment: .leading) {
            Text(title)
                .font(.system(size: 18)).bold()
            Text(detail)
                .font(.system(size: 16))
                .foregroundColor(Color(uiColor: UIColor(red: 0, green: 0, blue: 0, alpha: 0.6)))
        }
    }
}

struct CardDetailsCollapsed: View {
    @Binding var CardExpanded: Bool
    var componentHeight: CGFloat
    
    var body: some View {
        HStack {
            Spacer()
            FootprintDetails(title: "5ha", detail: "Size")
            Spacer()
            FootprintDetails(title: "4.5", detail: "Earths")
            Spacer()
            FootprintDetails(title: "29Jul", detail: "Overshoot day")
            Spacer()
            
        }.frame(width: UIScreen.main.bounds.width * 0.8, height: componentHeight * 0.4)
    }
}

struct CardDetailsExpanded: View {
    @Binding var CardExpanded: Bool
    var componentHeight: CGFloat
    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading) {
                Text("5ha").font(.system(size: 16)).bold().padding(.bottom, 1.0)
                    
                Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis erat nunc. Nullam non bibendum dui. Donec lectus metus, euismod eu interdum eget, interdum nec sem. Cras a nibh massa. Etiam quis consequat massa. Nulla vitae metus placerat, sagittis ligula et, ullamcorper arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eu ante quis tortor imperdiet interdum vel tincidunt risus.").font(.system(size: 12)).foregroundColor(Color(uiColor: UIColor(red: 0, green: 0, blue: 0, alpha: 0.6)))
                Button(action: {
                    
                }) {
                    Text("See on map").foregroundColor(.white)
                    Image("rightArrow")
                }
                .padding(.horizontal, 10)
                .padding(.vertical, 5)
                .background(Color(uiColor: UIColor(red: 0.29, green: 0.64, blue: 0.28, alpha: 1.00)))
                .font(.system(size: 14))
                .cornerRadius(25)
                
                Text("4.5").font(.system(size: 16)).bold().padding(.bottom, 1.0).padding(.top, 5)
                    
                Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis erat nunc. Nullam non bibendum dui. Donec lectus metus, euismod eu interdum eget, interdum nec sem. Cras a nibh massa. Etiam quis consequat massa.").font(.system(size: 12)).foregroundColor(Color(uiColor: UIColor(red: 0, green: 0, blue: 0, alpha: 0.6)))
                
                Spacer()

            }.padding(.leading, 20.0).frame(width: UIScreen.main.bounds.width * 0.8, height: componentHeight * 1.9)
        }
        
    }
}

//struct EarthView: View {
//    let amountOfEarths: Float
//
//    var body: some View {
//
//    }
//}

struct FootprintInfo_Previews: PreviewProvider {
    static var previews: some View {
        FootprintInfo()
            .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone 11 Pro")
            .environment(\.locale, .init(identifier: "en"))
        
        FootprintInfo()
            .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone SE (2nd generation)")
            .environment(\.locale, .init(identifier: "en"))
        
        FootprintInfo()
            .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone 11 Pro")
            .environment(\.locale, .init(identifier: "nl"))
        
        FootprintInfo()
            .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone SE (2nd generation)")
            .environment(\.locale, .init(identifier: "nl"))
    }
}
