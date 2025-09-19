"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts"
import { Monitor, AlertTriangle, TrendingUp, MapPin, Bell, Activity, Users, X } from "lucide-react"

// Sample data for charts
const healthCasesData = [
  { month: "Jan", cases: 120, recovered: 110, active: 10 },
  { month: "Feb", cases: 150, recovered: 140, active: 10 },
  { month: "Mar", cases: 200, recovered: 180, active: 20 },
  { month: "Apr", cases: 180, recovered: 170, active: 10 },
  { month: "May", cases: 220, recovered: 200, active: 20 },
  { month: "Jun", cases: 160, recovered: 150, active: 10 },
]

const waterQualityData = [
  { month: "Jan", ph: 7.2, turbidity: 2.1, chlorine: 0.8 },
  { month: "Feb", ph: 7.1, turbidity: 2.3, chlorine: 0.9 },
  { month: "Mar", ph: 6.9, turbidity: 2.8, chlorine: 0.7 },
  { month: "Apr", ph: 7.0, turbidity: 2.5, chlorine: 0.8 },
  { month: "May", ph: 7.3, turbidity: 2.0, chlorine: 0.9 },
  { month: "Jun", ph: 7.2, turbidity: 1.9, chlorine: 0.8 },
]

const diseaseDistribution = [
  { name: "Respiratory", value: 35, color: "#FF6B6B" },
  { name: "Gastrointestinal", value: 25, color: "#4ECDC4" },
  { name: "Vector-borne", value: 20, color: "#45B7D1" },
  { name: "Skin", value: 12, color: "#96CEB4" },
  { name: "Others", value: 8, color: "#FFEAA7" },
]

const alertsData = [
  {
    id: 1,
    type: "High Risk",
    title: "Dengue Outbreak Alert",
    location: "Guwahati, Assam",
    time: "2 hours ago",
    severity: "high",
    description:
      "Unusual spike in dengue cases detected in Guwahati region. Immediate vector control measures recommended.",
  },
  {
    id: 2,
    type: "Medium Risk",
    title: "Water Quality Warning",
    location: "Dibrugarh, Assam",
    time: "5 hours ago",
    severity: "medium",
    description: "Water turbidity levels above normal range. Recommend boiling water before consumption.",
  },
  {
    id: 3,
    type: "Low Risk",
    title: "Seasonal Flu Increase",
    location: "Silchar, Assam",
    time: "1 day ago",
    severity: "low",
    description: "Mild increase in flu cases consistent with seasonal patterns. Continue routine monitoring.",
  },
]

export function DashboardPreviewSection() {
  const [activeView, setActiveView] = React.useState("cases")
  const [showAlert, setShowAlert] = React.useState(false)
  const [selectedAlert, setSelectedAlert] = React.useState(alertsData[0])

  const handleAlertDemo = () => {
    setShowAlert(true)
    // Auto-hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000)
  }

  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
            <Monitor className="w-4 h-4 mr-2" />
            Interactive Dashboard
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Real-time Health
            <span className="text-primary"> Monitoring</span> Dashboard
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Experience our comprehensive dashboard with live data visualization, interactive charts, and intelligent
            alert systems.
          </p>
        </div>

        {/* Alert Demo */}
        {showAlert && (
          <div className="fixed top-4 right-4 z-50 max-w-md animate-slide-in-left">
            <Alert className="border-destructive bg-destructive/10">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <div className="flex justify-between items-start">
                <div>
                  <AlertTitle className="text-destructive">Health Alert Demo</AlertTitle>
                  <AlertDescription className="text-sm mt-1">
                    This is a demonstration of our real-time alert system. In production, this would notify relevant
                    health officials immediately.
                  </AlertDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-destructive hover:bg-destructive/20"
                  onClick={() => setShowAlert(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </Alert>
          </div>
        )}

        {/* Dashboard Mock-up */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-card rounded-2xl border shadow-lg p-6">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
              <div>
                <h3 className="text-2xl font-bold">Health Surveillance Dashboard</h3>
                <p className="text-muted-foreground">Real-time monitoring and analytics</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button onClick={handleAlertDemo} className="bg-destructive hover:bg-destructive/90 text-white">
                  <Bell className="w-4 h-4 mr-2" />
                  Demo Alert
                </Button>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Live</span>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Activity, label: "Active Cases", value: "1,247", change: "+12%", color: "text-destructive" },
                { icon: Users, label: "Recovered", value: "8,932", change: "+5%", color: "text-green-500" },
                { icon: TrendingUp, label: "Recovery Rate", value: "87.8%", change: "+2.1%", color: "text-primary" },
                { icon: MapPin, label: "Hotspots", value: "23", change: "-3", color: "text-secondary" },
              ].map((metric, index) => (
                <Card key={index} className="bg-background/50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className={`text-xs ${metric.color}`}>{metric.change}</p>
                      </div>
                      <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interactive Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Main Chart with Toggle */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                    <div>
                      <CardTitle>Health Trends Analysis</CardTitle>
                      <CardDescription>Toggle between different data views</CardDescription>
                    </div>
                    <Tabs value={activeView} onValueChange={setActiveView} className="w-auto">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="cases">Health Cases</TabsTrigger>
                        <TabsTrigger value="water">Water Quality</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    {activeView === "cases" ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={healthCasesData}>
                          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "8px",
                            }}
                          />
                          <Bar dataKey="cases" fill="#FF6B6B" name="Total Cases" />
                          <Bar dataKey="recovered" fill="#4ECDC4" name="Recovered" />
                          <Bar dataKey="active" fill="#45B7D1" name="Active" />
                        </BarChart>
                      </ResponsiveContainer>
                    ) : (
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={waterQualityData}>
                          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "8px",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="ph"
                            stroke="#FF6B6B"
                            strokeWidth={3}
                            dot={{ fill: "#FF6B6B", strokeWidth: 2, r: 4 }}
                            name="pH Level"
                          />
                          <Line
                            type="monotone"
                            dataKey="turbidity"
                            stroke="#4ECDC4"
                            strokeWidth={3}
                            dot={{ fill: "#4ECDC4", strokeWidth: 2, r: 4 }}
                            name="Turbidity"
                          />
                          <Line
                            type="monotone"
                            dataKey="chlorine"
                            stroke="#45B7D1"
                            strokeWidth={3}
                            dot={{ fill: "#45B7D1", strokeWidth: 2, r: 4 }}
                            name="Chlorine"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Disease Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Disease Distribution</CardTitle>
                  <CardDescription>Current outbreak patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={diseaseDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {diseaseDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} strokeWidth={2} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {diseaseDistribution.map((entry, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span>
                          {entry.name} ({entry.value}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Alerts */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Alerts</CardTitle>
                  <CardDescription>Latest health warnings and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alertsData.map((alert) => (
                      <div
                        key={alert.id}
                        className="flex items-start space-x-3 p-3 rounded-lg border bg-background/50 hover:bg-muted/50 transition-colors"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            alert.severity === "high"
                              ? "bg-destructive"
                              : alert.severity === "medium"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          }`}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <Badge variant={alert.severity === "high" ? "destructive" : "outline"} className="text-xs">
                              {alert.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{alert.time}</span>
                          </div>
                          <h4 className="font-semibold text-sm">{alert.title}</h4>
                          <p className="text-xs text-muted-foreground mb-1">{alert.location}</p>
                          <p className="text-xs text-muted-foreground">{alert.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-primary/20">
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-1">Experience the full dashboard</h4>
              <p className="text-sm text-muted-foreground">
                Access real-time data, advanced analytics, and comprehensive reporting tools
              </p>
            </div>
            <Button className="gradient-saffron text-white hover:opacity-90 transition-opacity">
              Request Demo Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
