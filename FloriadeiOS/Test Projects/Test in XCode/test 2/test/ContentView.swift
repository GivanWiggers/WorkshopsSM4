//
//  ContentView.swift
//  test
//
//  Created by Pieter van der Mullen on 15/03/2022.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        return ZStack {
            Color.white.ignoresSafeArea()
            VStack {
                Image("startPicture").resizable().aspectRatio(contentMode: .fit).edgesIgnoringSafeArea(.top).padding(.top, -60.0)
                
                Image("floriadeLogo").resizable().aspectRatio(contentMode: .fit).padding(.horizontal, 20.0).padding(.bottom, 20.0).padding(.top, 20.0)
                
                Spacer()
                ZStack{
                    Button {
                        print("Hey!")
                    } label: {
                        Image("btnGetStarted").resizable().aspectRatio(contentMode: .fit).padding(.horizontal, 70.0).padding(.bottom, 20.0)
                        
                    }
                    Text("Get started").fontWeight(.semibold).foregroundColor(Color.white).padding(.bottom, 20.0).font(.custom("ABeeZee", size: 28))
                }
                                
            }
            
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone 11 Pro")
    }
}
