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
            Image("ARImageBackground").resizable().edgesIgnoringSafeArea(.all)
            VStack {
                Spacer()
                FootprintInfo()
            }
        }
    }
}

struct HomeScreen_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            HomeScreen()
                .previewInterfaceOrientation(.portrait)
            .previewDevice("iPhone 11 Pro")
            HomeScreen()
                .previewInterfaceOrientation(.portrait)
                .previewDevice("iPhone SE (3rd generation)")
        }
    }
}
