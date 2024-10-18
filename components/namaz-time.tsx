"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MapPin } from "lucide-react" // Keep only the required icon

// Mock data for nearby mosques
const nearbyMosques = [
  {
    id: 1,
    name: "Al-Aqsa Mosque",
    position: [31.7767, 35.2345], // Latitude, Longitude
    distance: "0.5 km",
    eta: "5 mins",
    prayerTimes: {
      Fajr: "05:30 AM",
      Dhuhr: "12:30 PM",
      Asr: "03:45 PM",
      Maghrib: "06:30 PM",
      Isha: "08:00 PM",
    },
  },
  {
    id: 2,
    name: "Islamic Center",
    position: [31.7790, 35.2340],
    distance: "1.2 km",
    eta: "10 mins",
    prayerTimes: {
      Fajr: "05:35 AM",
      Dhuhr: "12:35 PM",
      Asr: "03:50 PM",
      Maghrib: "06:35 PM",
      Isha: "08:05 PM",
    },
  },
  // Add more mosque data here
]

export function NamazTimeComponent() {
  const [location, setLocation] = useState<[number, number] | null>(null)
  const [selectedMosque, setSelectedMosque] = useState(nearbyMosques[0])

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude])
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4 md:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center">Namaz Time</CardTitle>
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            {location ? `${location[0].toFixed(2)}, ${location[1].toFixed(2)}` : "Locating..."}
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="list">Mosque List</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>

            {/* Mosque List */}
            <TabsContent value="list">
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                {nearbyMosques.map((mosque) => (
                  <Card
                    key={mosque.id}
                    className="mb-4 last:mb-0 cursor-pointer hover:bg-accent"
                    onClick={() => setSelectedMosque(mosque)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{mosque.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          <span className="mr-2">{mosque.distance}</span>
                          <span>{mosque.eta}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </ScrollArea>
            </TabsContent>

            {/* Map View */}
            <TabsContent value="map">
              <div className="aspect-video rounded-lg overflow-hidden">
                {location ? (
                  <MapContainer
                    center={location}
                    zoom={15} // Adjust zoom level for a 5 km radius
                    style={{ height: "300px", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={location}>
                      <Popup>You are here</Popup>
                    </Marker>
                    <Circle center={location} radius={1000} pathOptions={{ color: "blue", fillOpacity: 0.1 }} />
                    {nearbyMosques.map((mosque) => (
                      <Marker key={mosque.id} position={mosque.position}>
                        <Popup>{mosque.name}</Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                ) : (
                  "Loading map..."
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Prayer Times */}
          <div className="mt-6 space-y-4">
            <h2 className="text-xl font-semibold">Prayer Times for {selectedMosque.name}</h2>
            {Object.entries(selectedMosque.prayerTimes).map(([prayer, time]) => (
              <div key={prayer} className="flex justify-between items-center">
                <span>{prayer}</span>
                <span className="font-semibold">{time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
