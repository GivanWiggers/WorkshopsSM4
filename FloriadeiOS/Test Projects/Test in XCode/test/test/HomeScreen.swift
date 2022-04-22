//
//  ContentView.swift
//  test
//
//  Created by Pieter van der Mullen on 15/03/2022.
//

import SwiftUI

struct HomeScreen: View {
    var body: some View {
        return ZStack {
            Image("floriadeBackground1").resizable().edgesIgnoringSafeArea(.all)
            VStack {
                Spacer()
                ZStack{
                    Image("navBar").resizable().aspectRatio(contentMode: .fit).padding(.horizontal, 20.0)
                    HStack {
                        
                        VStack {
                            Button {
                                print("Hey!")
                            } label: {
                                Image(systemName: "map").padding().foregroundColor(Color.black)
                            }
                            Text("Map").foregroundColor(Color.black).padding(.top , -20.0)
                            
                        }
                        
                        Spacer()
                        
                        VStack {
                            Button {
                                print("Hey!")
                            } label: {
                                Image(systemName: "house").padding().foregroundColor(Color.black)
                            }
                            Text("Home").foregroundColor(Color.black).padding(.top , -20.0)
                            
                        }
                        
                        Spacer()
                        
                        VStack {
                            Button {
                                print("Hey!")
                            } label: {
                                Image(systemName: "arkit").padding().foregroundColor(Color.black)
                            }
                            Text("AR").foregroundColor(Color.black).padding(.top , -20.0)
                            
                        }
                    }.padding(.horizontal, 60.0).padding(.bottom, 00.0)
                }.padding(.bottom, 20.0)
            }
        }
    }
}

struct HomeScreen_Previews: PreviewProvider {
    static var previews: some View {
        HomeScreen()
            .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone 11 Pro")
    }
}
